const firstTheme = {
  "--body-bg": "#3a4663",
  "--board-bg": "#242d44",
  "--equal-btn-bg": "#d03f2f",
  "--equal-btn-shadow": "#93261a",
  "--input-bg": "#181f33",
  "--number-bg": "#eae3dc",
  "--number-shadow": "#b3a497",
  "--number-color": "#434a59",
  "--del-btn-color": "white",
  "--del-btn-bg": "#647198",
  "--del-btn-shadow": "#414e73",
  "--main-color": "#fff",
  "--equal-btn-hover": "#f96b5b",
  "--del-btn-hover": "#a2b2e1",
  "--number-hover": "#fffffe",
};

const secondTheme = {
  "--body-bg": "#E6E6E6",
  "--main-color": "#36362C",
  "--board-bg": "#D2CDCD",
  "--equal-btn-bg": "#C85402",
  "--equal-btn-shadow": "#873901",
  "--input-bg": "#EEEEEE",
  "--number-bg": "#E5E4E1",
  "--number-shadow": "#A79E91",
  "--number-color": "#36362C",
  "--del-btn-color": "white",
  "--del-btn-bg": "#378187",
  "--del-btn-shadow": "#1B6066",
  "--equal-btn-hover": "#FF8A38",
  "--del-btn-hover": "#62B5BC",
  "--number-hover": "#FFFFFF",
};

export function setTheme(theme) {
  Object.keys(theme).forEach(function (key) {
    document.documentElement.style.setProperty(key, theme[key]);
  });
}

export const themes = [firstTheme, secondTheme];
