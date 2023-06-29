// class SingletonTemplate<T extends ZepetoScriptBehaviour> extends ZepetoScriptBehaviour {
//     private static instance: T;
  
//     // protected constructor(name: string) {
//     //   super(name);
//     // }
  
//     public static getInstance<U extends ZepetoScriptBehaviour>(this: new (name: string) => U, name: string): U {
//       if (!SingletonTemplate.instance) {
//         SingletonTemplate.instance = new this(name);
//       }
//       return SingletonTemplate.instance as U;
//     }
//   }


  class SingletonClass {
    private static instance: SingletonClass;
  
    private constructor() {
      // private 생성자로 외부에서의 인스턴스 생성을 막습니다.
    }
  
    public static getInstance(): SingletonClass {
      if (!SingletonClass.instance) {
        SingletonClass.instance = new SingletonClass();
      }
      return SingletonClass.instance;
    }
  
    public someMethod(): void {
      console.log("This is a method of the singleton instance.");
    }
  }
  