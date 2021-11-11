import React from "react";
import {
  StoreProvider,
  createStore,
  useStoreState,
  computed,
  action,
} from "easy-peasy";
import { act } from "react-dom/test-utils";
import { produce } from "immer";
import { render } from "@testing-library/react";
// import { store } from "../index";
describe("example", () => {
  it("computed properties work in a React component", () => {
    // ARRANGE
    let renderCount = 0;
    function Product({ id }) {
      const product = useStoreState(
        (state) => state.products.itemMap[id]
      );
      renderCount += 1;
      return <div data-testid="name">{product.name}</div>;
    }

    const store = createStore({
      products: {
        items: [{ id: 1, name: "boots" }],
        itemMap: computed(
          [(state) => state.items],
          (items) =>
            items.reduce(
              (acc, cur) => ({ ...acc, [cur.id]: cur }),
              {}
            )
        ),
        setProductName: action((state, payload) => {
          const product = state.items.find(
            (p) => p.id === payload.id
          );
          product.name = payload.name;
        }),
      },
      other: {
        foo: "bar",
        setFoo: action((state) => {
          state.foo = "bar";
        }),
      },
    });

    const app = (
      <StoreProvider store={store}>
        <Product id={1} />
      </StoreProvider>
    );

    // ACT
    const { getByTestId } = render(app);

    // ASSERT
    expect(getByTestId("name").textContent).toBe("boots");
    expect(renderCount).toBe(1);

    // ACT
    act(() => {
      store.getActions().products.setProductName({
        id: 1,
        name: "shoes",
      });
    });

    // ASSERT
    expect(store.getState().products.items).toEqual([
      { id: 1, name: "shoes" },
    ]);
    expect(getByTestId("name").textContent).toBe("shoes");

    expect(renderCount).toBe(2);

    // ACT
    act(() => {
      store.getActions().products.setProductName({
        id: 1,
        name: "shoes",
      });
    });

    // ASSERT
    expect(getByTestId("name").textContent).toBe("shoes");
    expect(renderCount).toBe(2);

    // ACT
    act(() => {
      store.getActions().other.setFoo("qux");
    });

    // ASSERT
    expect(getByTestId("name").textContent).toBe("shoes");
    expect(renderCount).toBe(2);
  });

  test("computed properties accessing others in React component", () => {
    // ARRANGE
    let renderCount = 0;
    function Basket() {
      const products = useStoreState(
        (state) => state.basket.products
      );
      renderCount += 1;
      return (
        <div data-testid="products">
          {products.map((x) => x.name).join(", ")}
        </div>
      );
    }

    const store = createStore({
      products: {
        items: [
          { id: 1, name: "boots", price: 20 },
          { id: 2, name: "shirt", price: 50 },
        ],
        itemMap: computed(
          [(state) => state.items],
          (items) =>
            items.reduce(
              (acc, cur) => ({ ...acc, [cur.id]: cur }),
              {}
            )
        ),
        setProductName: action((state, payload) => {
          const product = state.items.find(
            (p) => p.id === payload.id
          );
          product.name = payload.name;
        }),
      },
      basket: {
        productIds: [1],
        products: computed(
          [
            (state, storeState) =>
              storeState.products.itemMap,
            (state) => state.productIds,
          ],
          (productMap, productIds) =>
            productIds.map((id) => productMap[id])
        ),
        addProductToBasket: action((state, payload) => {
          state.productIds.push(payload);
        }),
        property: "foo",
        setProperty: action((state, payload) => {
          state.property = payload;
        }),
      },
    });

    const app = (
      <StoreProvider store={store}>
        <Basket />
      </StoreProvider>
    );

    // ACT
    const { getByTestId } = render(app);

    // ASSERT
    expect(getByTestId("products").textContent).toBe(
      "boots"
    );
    expect(renderCount).toBe(1);

    // ACT
    act(() => {
      store.getActions().basket.addProductToBasket(2);
    });

    // ASSERT
    expect(getByTestId("products").textContent).toBe(
      "boots, shirt"
    );
    expect(renderCount).toBe(2);

    // ACT
    act(() => {
      store.getActions().basket.setProperty("bar");
    });

    // ASSERT
    expect(getByTestId("products").textContent).toBe(
      "boots, shirt"
    );
    expect(renderCount).toBe(2);
  });
});
