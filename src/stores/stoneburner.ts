import { writable } from "svelte/store";

export const initiative = writable(
    {
        "left": [{"id": "left0", "name": "", "res": null, "atk": null}],
        "right": [{"id": "right0", "name": "", "res": null, "atk": null}]
    }
);
