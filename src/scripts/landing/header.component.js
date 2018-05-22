class AppHeaderCtrl {
  constructor() {
    'ngInject';
    this.nav = {
      navItems: ['home', 'add'],
      selectedIndex: 0,
    };
    this.navClick = ($index) =>{
      this.nav.selectedIndex = $index;
    }
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'scripts/landing/header.html'
};

export default AppHeader;
