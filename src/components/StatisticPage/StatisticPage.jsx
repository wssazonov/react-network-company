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
        <div className="search-input regular-text">
          <input placeholder="Поиск по имени"/>
          <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66453 5.29883C3.13848 5.77279 3.71401 6.00977 4.39109 6.00977C5.06817 6.00977 5.64369 5.77279 6.11765 5.29883C6.59161 4.82487 6.82859 4.24935 6.82859 3.57227C6.82859 2.89518 6.59161 2.31966 6.11765 1.8457C5.64369 1.37174 5.06817 1.13477 4.39109 1.13477C3.71401 1.13477 3.13848 1.37174 2.66453 1.8457C2.19057 2.31966 1.95359 2.89518 1.95359 3.57227C1.95359 4.24935 2.19057 4.82487 2.66453 5.29883ZM7.64109 6.00977L10.3325 8.70117L9.51999 9.51367L6.82859 6.82227V6.39062L6.67624 6.23828C6.03302 6.79688 5.2713 7.07617 4.39109 7.07617C3.40932 7.07617 2.57143 6.73763 1.87742 6.06055C1.20033 5.38346 0.861792 4.55404 0.861792 3.57227C0.861792 2.59049 1.20033 1.76107 1.87742 1.08398C2.57143 0.389974 3.40932 0.0429688 4.39109 0.0429688C5.37286 0.0429688 6.20229 0.389974 6.87937 1.08398C7.55645 1.76107 7.89499 2.59049 7.89499 3.57227C7.89499 3.92773 7.81036 4.33398 7.64109 4.79102C7.47182 5.23112 7.27716 5.58659 7.0571 5.85742L7.20945 6.00977H7.64109Z" fill="#1AA5B8"/>
          </svg>
        </div>
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
