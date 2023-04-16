import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-6K3SY1R664");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
