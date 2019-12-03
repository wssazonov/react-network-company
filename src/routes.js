import ContractPage from "./components/ContractPage/ContractPage";
import UsersPage from "./components/UsersPage/UsersPage";
import AddressesPage from "./components/AddressesPage/AddressesPage";
import JournalPage from "./components/JournalPage/JournalPage";
import TransactionsPage from "./components/TransactionsPage/TransactionsPage";
import MyProfilePage from "./components/MyProfilePage/MyProfilePage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import PermissionsPage from "./components/PermissionsPage/PermissionsPage";

import ObjectsPage from "./components/ObjectsPage/ObjectsPage";
import ObjectDetailPage from "./components/ObjectsPage/ObjectDetailPage/ObjectDetailPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import Consumers from "./components/Consumers/Consumers";
import ConsumerInfoPage from "./components/ConsumerInfo/ConsumerInfoPage";
import DocumentsPage from "./components/DocumentsPage/DocumentsPage";
import EventsPage from "./components/EventsPage/EventsPage";
import EventsPageNow from "./components/EventsPage/EventsPageNow";
import EventsPageDate from "./components/EventsPage/EventsPageDate";
import StatisticPage from "./components/StatisticPage/StatisticPage";
import ReadyPage from "./components/ReadyPage/ReadyPage";
import ReadyObjectPage from "./components/ReadyObjectPage/ReadyObjectPage";
import StatisticObjectPage from "./components/StatisticPage/StatisticObjectPage/StatisticObjectPage";
import StatisticUserPage from "./components/StatisticPage/StatisticUserPage/StatisticUserPage";
import StatisticDevicePage from "./components/StatisticPage/StatisticDevicePage/StatisticDevicePage";
import StatisticAgregatorPage from "./components/StatisticPage/StatisticAgregatorPage/StatisticAgregatorPage";

const routes = [
  { path: '/objects', exact: true, component: ObjectsPage },
  { path: '/objects/:objectId', exact: false, component: ObjectDetailPage },
  { path: '/settings', exact: true, component: SettingsPage },
  { path: '/documents', exact: true, component: DocumentsPage },
  { path: '/consumers', exact: true, component: Consumers },
  { path: '/consumers/:consumerId', exact: false, component: ConsumerInfoPage },
  { path: '/dr-events', exact: true, component: EventsPage },
  { path: '/dr-events/:eventNowId', exact: true, component: EventsPageDate },
  { path: '/statistic', component: StatisticPage },
  { path: '/ready', exact: true, component: ReadyPage },
  { path: '/ready/:userId', exact: true, component: ReadyObjectPage },
  


  { path: '/contracts', exact: true, component: ContractPage},
  { path: '/users', exact: true, component: UsersPage },
  { path: '/users/:userId', exact: false, component: UserProfilePage },
  { path: '/addresses', exact: true, component: AddressesPage },
  { path: '/journal', exact: true, component: JournalPage },
  { path: '/transactions', exact: true, component: TransactionsPage },
  { path: '/profile', exact: true, component: MyProfilePage },
  { path: '/permissions', exact: true, component: PermissionsPage },
];

export default routes;
