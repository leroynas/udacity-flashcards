import { StackActions, NavigationActions } from 'react-navigation';

const config = {};

export function setNavigator(navigator) {
  if (navigator) config.navigator = navigator;
}

export function navigate(routeName, params) {
  const action = NavigationActions.navigate({ routeName, params });
  if (navigator) config.navigator.dispatch(action);
}

export function goBack() {
  const action = NavigationActions.back({});
  if (navigator) config.navigator.dispatch(action);
}

export function replace(routeName, params) {
  const action = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName, params })],
  });

  if (navigator) config.navigator.dispatch(action);
}
