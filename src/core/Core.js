//////////// Component ////////////

export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    // ...
  }
}

///// Router /////
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/"); // 해쉬가 없을경우 main으로 설정한 해쉬를 설정해줌
  }
  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?"); // 받은 주소 정보를 해쉬와 쿼리스트링으로 나눠담음

  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});

  history.replaceState(query, ""); // queryString의 값을 history에 넣어준다.

  const currentRoute = routes.find(
    (route) => new RegExp(`${route.path}/?$`).test(hash) // 받은 route 정보에서 hash의 값을 비교해서 currentRoute에 담음
  );

  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el); // currentRoute에서 받은 값의 component를 실행후 el을 routeView에 삽입

  window.scrollTo(0, 0); // 페이지를 이동할때 화면의 맨 위로 이동
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

///// Store /////
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
