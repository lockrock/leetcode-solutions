/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    private iter /* = null */;
    private _next = null
    constructor(private nestedList: NestedInteger[]) {
      
      function* getNestedIterator(a) {
        for (const el of a) {
          if (el.isInteger()) {
            yield el.getInteger()
          } else {
            yield* getNestedIterator(el.getList())
          }
        }
        
            
      }
      this.iter = getNestedIterator(this.nestedList)
      this._next = this.iter.next()
    }

    hasNext(): boolean {
      console.log('hasNext()', !this._next.done)
		  return !this._next.done
    }

	next(): number {
    const res = this._next.value
    this._next = this.iter.next()
    console.log('next()', res)
    return res
  }
}

// class NestedIterator {
//     private current = null;
//     constructor(private nestedList: NestedInteger[]) {
// 		this.current = this.nestedList
//     }

//     hasNext(): boolean {
// 		return this.current.isInteger() || (this.current.isList() && this.current.getList().length)
//     }

// 	next(): number {
//         let curr = this.current
// 		if(curr.isInteger()) {
//             this.current = 
//             return curr.getInteger()
//         } else {

//         }
//     }
// }

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
