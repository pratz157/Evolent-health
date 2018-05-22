class AppFooterCtrl {
  constructor() {
    'ngInject';
    // this.appName = AppConstants.appName;

    // Get today's date to generate the year
    this.date = new Date();
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: 'scripts/landing/footer.html'
};

export default AppFooter;
