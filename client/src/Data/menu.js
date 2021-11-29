// User functions
import UserHome from '../Components/UserDashboard/Home';
import UserTransactions from '../Components/UserDashboard/Transactions';
import UserTransfer from '../Components/UserDashboard/Transfer';

// Admin functions
import AdminHome from '../Components/Admin/Home';
import AdminUsers from '../Components/Admin/Users';
import AdminCreditDebit from '../Components/Admin/CreditDebit';

export const userDashboardMenu = [
    {
        'title': 'Home',
        'location': '/user/dashboard',
        'menuid': 0,
        'component': UserHome
    },
    {
        'title': 'Transactions',
        'location': '/user/transactions',
        'menuid': 1,
        'component': UserTransactions
    },
    {
        'title': 'Transfer',
        'location': '/user/transfer',
        'menuid': 2,
        'component': UserTransfer
    },
];

export const adminMenu = [
    {
        'title': 'Home',
        'location': '/admin/dashboard',
        'menuid': 0,
        'component': AdminHome
    },
    {
        'title': 'Users',
        'location': '/admin/users',
        'menuid': 1,
        'component': AdminUsers
    },
    {
        'title': 'Credit / Debit',
        'location': '/admin/creditdebit',
        'menuid': 2,
        'component': AdminCreditDebit
    },
];