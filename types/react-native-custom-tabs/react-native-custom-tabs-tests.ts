import * as ReactNativeCustomTabs from 'react-native-custom-tabs';

const rnt: ReactNativeCustomTabs.CustomTabsOptions = {
  toolbarColor: 'blue',
  enableUrlBarHiding: false,
  showPageTitle: true,
  enableDefaultShare: true,
};

const url: Promise<boolean> = ReactNativeCustomTabs.openURL('testurl.com', rnt);
