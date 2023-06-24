/* Result is a class that wraps a value or an error *
 * Similar to Rust's Result enum *
 * @param T - The type of the value to be wrapped in the Result *
 * @param E - The type of the error to be wrapped in the Result *
 * @example
 * const getResult = (): Result<number, string> => {}
 * */
export class Result<T, E> {
  Result: T | undefined;
  Error: E | undefined;
  constructor(result: T | undefined, error: E | undefined) {
    this.Result = result;
    this.Error = error;
  }
  /* OK is a static method that returns a Result with a value *
   * @param result: T - The value to be wrapped in the Result *
   * @returns Result<T, E> - A Result with the value passed in
   * @example
   * const result = Result.Ok<number, string>(10);
   * */
  public static Ok<T, E>(result: T): Result<T, E> {
    return new Result<T, E>(result, undefined);
  }
  /* Err is a static method that returns a Result with an error *
   * @param error: E - The error to be wrapped in the Result *
   * @returns Result<T, E> - A Result with the error passed in
   * @example
   * const result = Result.Err<number, string>("Error With finding the will to live");
   * */
  public static Err<T, E>(error: E): Result<T, E> {
    return new Result<T, E>(undefined, error);
  }
  /* isOk is a method that returns a boolean indicating if the Result is Ok *
   * @returns boolean - A boolean indicating if the Result is Ok
   * @example
   * const result = Result.Ok<number, string>(10);
   * if (result.isOk()) {
   *  console.log(`Result is ${result.unwrap()}`);
   *  }
   *  */
  public isOk(): boolean {
    return this.Result !== undefined;
  }
  /* isErr is a method that returns a boolean indicating if the Result is Err *
   * @returns boolean - A boolean indicating if the Result is Err
   * @example
   * const result = Result.Err<number, string>("An Unknown error occured LESGO");
   * if (result.isErr()) {
   * console.log(`Error is ${result.Error!}`);
   * }
   * */
  public isErr(): boolean {
    return this.Error !== undefined;
  }
  /* unwrap is a method that returns the value of the Result if it is Ok *
   * @returns T - The value of the Result if it is Ok
   * @throws Error - Throws an error if the Result is Err
   * @example
   * const result = Result.Ok<number, string>(10);
   * if (result.isOk()) {
   * console.log(`Result is ${result.unwrap()}`);
   * }
   * */
  public unwrap(): T {
    if (this.Result === undefined) {
      throw new Error("Result is undefined");
    }
    return this.Result;
  }
  /* unwrapErr is a method that returns the error of the Result if it is Err *
   * @returns E - The error of the Result if it is Err
   * @throws Error - Throws an error if the Result is Ok
   * @example
   * const result = Result.Err<number, string>("An Unknown error occured LESGO");
   * if (result.isErr()) {
   * console.log(`Error is ${result.unwrapErr()}`);
   * }
   * */
  public unwrapErr(): E {
    if (this.Error === undefined) {
      throw new Error("Error is undefined");
    }
    return this.Error;
  }
}
