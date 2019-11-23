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

const routes = [
  { path: '/objects', exact: true, component: ObjectsPage },
  { path: '/objects/:objectId', exact: false, component: ObjectDetailPage },
  { path: '/users', exact: true, component: UsersPage },
  { path: '/users/:userId', exact: false, component: UserProfilePage },
  { path: '/addresses', exact: true, component: AddressesPage },
  { path: '/journal', exact: true, component: JournalPage },
  { path: '/transactions', exact: true, component: TransactionsPage },
  { path: '/profile', exact: true, component: MyProfilePage },
  { path: '/permissions', exact: true, component: PermissionsPage },
];

export default routes;