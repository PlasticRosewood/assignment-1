// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req : Request, res : Response) : void => {
  const { num } = req.params;
  if (num == null) {
    res.status(400).send("Request parameters were null");
    return;
  } 

  if (isNaN(parseInt(num))) {
    res.status(400).send("Request is not a number");
    return;
  }

  const fibN : number = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
