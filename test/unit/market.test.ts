import Market from "@/market";

describe("Unit Market Test", () => {
  it("It should implements Market", () => {
    const market = new Market();

    expect(market.name).toBe("Market Example");
    expect(market.token).toBe("bitcoin");
  });
});
