import { writable } from "svelte/store";
import { persisted } from 'svelte-persisted-store';

export const initiative = writable(
    {
        "left": [{"id": "left0", "name": "", "notes": "", "res": null, "res_max": null, "atk": null, "atk_max": null}],
        "right": [{"id": "right0", "name": "", "notes": "", "res": null, "res_max": null, "atk": null, "atk_max": null}]
    }
);

export const settings = writable(
    {
        "highlightLast": false
    }
)