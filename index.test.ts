import { OneDoc } from "./index";

describe("one-doc-typescript-sdk", () => {
    it("initialize client", async () => {
        const onedoc = new OneDoc({
            apiKey: "API_KEY",
        });
    });
});
