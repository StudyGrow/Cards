export class InvalidSplitError extends Error {
  constructor(wholeSplit: number, actualSplit: number) {
    super(
      `Split is invalid, should equal to ${wholeSplit} but is in whole: ${actualSplit}`
    );
    this.name = "InvalidSplitError";
  }
}
