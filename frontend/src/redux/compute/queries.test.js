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
  it("computed properties can access global state", () => {
    // ARRANGE
    const store = createStore({
      products: {
        items: [{ id: 1, name: "boots", price: 20 }],
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
      },
    });

    // ASSERT
    expect(store.getState().basket.products).toEqual([
      { id: 1, name: "boots", price: 20 },
    ]);

    // ACT
    store.getActions().products.setProductName({
      id: 1,
      name: "shoes",
    });

    // ASSERT
    expect(store.getState().basket.products).toEqual([
      { id: 1, name: "shoes", price: 20 },
    ]);
  });

  test("updating nested state", () => {
    const model = {
      items: {
        1: { id: 1, text: "foo" },
      },

      nested: {
        numbers: [1, 2, 3],
        reset: action((state) => {
          state.numbers = [5];
        }),
      },

      list: computed([(state) => state.items], (items) =>
        Object.values(items)
      ),
    };

    const store = createStore(model);

    // ACT
    store.getActions().nested.reset();

    // ASSERT
    expect(store.getState().nested.numbers).toEqual([5]);
    expect(store.getState().list).toEqual([
      { id: 1, text: "foo" },
    ]);
  });
});
