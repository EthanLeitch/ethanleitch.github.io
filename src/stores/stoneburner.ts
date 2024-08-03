import { writable } from "svelte/store";

export const initiative = writable(
    [
        {"id": 0, "name": "", "res": null, "atk": null},
    ]
);

export const string = writable("Hello World!");