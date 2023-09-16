// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: 'ic_analytics',
  },
  {
    title: 'Formation',
    path: '/admin/courses',
    icon: 'ic_user',
  },
  {
    title: 'articles',
    path: '/admin/blog',
    icon: 'ic_blog',
  },
  {
    title: 'paramètres',
    path: '/admin/settings',
    icon: 'ic_settings',
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
  
];
// const MENU_OPTIONS = [
//     {
//       label: 'Accueil',
//       icon: 'eva:home-fill',
//       link: config.LMS_BASE_URL
//     },
//     {
//       label: 'Portail d\'administration',
//       icon: 'eva:home-fill',
//       link: config.ADMIN_URL + '/admin/'
//     },
//     {
//       label: 'Profile',
//       icon: 'eva:person-fill',
//       link: config.ACCOUNT_PROFILE_URL+'/profile/u/'+getAuthenticatedUser().username,
//     },
//     {
//       label: 'Compte',
//       icon: 'eva:person-fill',
//       link: config.ACCOUNT_SETTINGS_URL,
//     },
//     {
//       label: 'Mes accomplissement',
//       icon: 'eva:person-fill',
//       link: config.GAMIFICATION_URL+'/gamification/',
//     },
//     {
//       label: 'Se déconnecter',
//       icon: 'eva:person-fill',
//       link: config.LOGOUT_URL,
//     },
    
//   ];
export default navConfig;
