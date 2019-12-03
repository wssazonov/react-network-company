import React, {useRef} from 'react';
import './StatisticPage.scss';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import StatisticObjectPage from "./StatisticObjectPage/StatisticObjectPage";
import StatisticUserPage from "./StatisticUserPage/StatisticUserPage";
import StatisticDevicePage from "./StatisticDevicePage/StatisticDevicePage";
import {Route} from "react-router";
import StatisticAgregatorPage from "./StatisticAgregatorPage/StatisticAgregatorPage";

const treeData = [
  {
    name: 'Объект 1',
    id: 1,
    children: [
      {
        name: 'Потребитель 1',
        id: 1,
        children: [
          {
            name: 'Прибор учета 1',
            id: 1,
            children: []
          },
          {
            name: 'Прибор учета 2',
            id: 2,
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'Объект 2',
    id: 2,
    children: [
      {
        name: 'Потребитель 1',
        id: 1,
        children: [
          {
            name: 'Прибор учета 1',
            id: 1,
            children: []
          }
        ]
      },
      {
        name: 'Потребитель 2',
        id: 2,
        children: [
          {
            name: 'Прибор учета 1',
            id: 1,
            children: []
          }
        ]
      }
    ]
  }
];

const styledNode = makeStyles(theme => ({group: { marginLeft: 16 }}));

function StyledTreeItem(props) {
  const { link, name, nodeId, ...others } = props;
  const classes = styledNode();
  return (
    <TreeItem
      name="b"
      label={
        <NavLink activeClassName='active-tree-link' className="link-label" to={'/statistic' + link}>{ name }</NavLink>
      }
      classes={{ group: classes.group }}
      nodeId={nodeId}
      {...others}
    />
  );
}

function StatisticPage() {

  const [expanded, setExpanded] = React.useState([]);
  const handleChange = (event, nodes) => {
    if (event.target && (event.target.nodeName === 'svg' || event.target.nodeName === 'path')) {
      setExpanded(nodes);
    }
  };

  let data = treeData;
  let nodeCounter = 0;
  return (
    <div className="addresses-page statistic-page">

      <div className="tree-nav-block">
        <NavLink activeClassName='active-tree-link' to={'/statistic'} className="agregator-link">Агрегатор</NavLink>
        <TreeView defaultEndIcon={<div style={{ width: 24 }} />} defaultCollapseIcon={<ArrowDropDownIcon/>} defaultExpandIcon={<ArrowRightIcon/>} expanded={expanded} onNodeToggle={handleChange}>
          {
            data.map(firstLevel =>
              <StyledTreeItem nodeId={(nodeCounter++).toString()} key={nodeCounter} name={firstLevel.name} link={'/' + firstLevel.id}>
                {
                  firstLevel.children && firstLevel.children.map(secondLevel =>
                    <StyledTreeItem nodeId={(nodeCounter++).toString()} key={nodeCounter} name={secondLevel.name} link={`/${firstLevel.id}/${secondLevel.id}`}>
                      {
                        secondLevel.children && secondLevel.children.map(thirdLevel => <StyledTreeItem nodeId={(nodeCounter++).toString()} key={nodeCounter} name={thirdLevel.name} link={`/${firstLevel.id}/${secondLevel.id}/${thirdLevel.id}`}/>)
                      }
                    </StyledTreeItem>
                  )
                }
              </StyledTreeItem>
            )
          }
          <StyledTreeItem nodeId="1" />
        </TreeView>
      </div>

      <div className="page-content">
        <Route path={'/statistic'} exact={true} component={StatisticAgregatorPage}/>
        <Route path={'/statistic/:objectId'} exact={true} component={StatisticObjectPage}/>
        <Route path={'/statistic/:objectId/:consumerId'} exact={true} component={StatisticUserPage}/>
        <Route path={'/statistic/:objectId/:consumerId/:deviceId'} exact={true} component={StatisticDevicePage}/>
      </div>

    </div>
  );
}

export default StatisticPage;
