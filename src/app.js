import { ProjectList } from './App/ProjectList';

globalThis.DEFAULT_VALUE = 'Attila';

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    /*const timerId = setTimeout(this.startAnalytics, 3000);

    document
      .getElementById('stop-analytics-btn')
      .addEventListener('click', () => {
        console.log('Clearing timeout...')
        clearTimeout(timerId);
      });*/
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();