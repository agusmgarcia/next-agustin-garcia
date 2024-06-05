type Func<TArgs extends Array<any> = [], TResult = void> = (
  ...args: TArgs
) => TResult;

export default Func;
