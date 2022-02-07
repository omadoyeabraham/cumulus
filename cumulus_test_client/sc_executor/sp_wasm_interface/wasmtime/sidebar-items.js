initSidebarItems({"constant":[["DEFAULT_INSTANCE_LIMIT","Value returned by [`ResourceLimiter::instances`] default method"],["DEFAULT_MEMORY_LIMIT","Value returned by [`ResourceLimiter::memories`] default method"],["DEFAULT_TABLE_LIMIT","Value returned by [`ResourceLimiter::tables`] default method"]],"enum":[["CallHook","Passed to the argument of [`Store::call_hook`] to indicate a state transition in the WebAssembly VM."],["Extern","An external item to a WebAssembly module, or a list of what can possibly be exported from a wasm module."],["ExternType","A list of all possible types which can be externally referenced from a WebAssembly module."],["InstanceAllocationStrategy","Represents the module instance allocation strategy to use."],["ModuleVersionStrategy","Configure the strategy used for versioning in serializing and deserializing [`crate::Module`]."],["Mutability","Indicator of whether a global is mutable or not"],["OptLevel","Possible optimization levels for the Cranelift codegen backend."],["ProfilingStrategy","Select which profiling technique to support."],["Strategy","Possible Compilation strategies for a wasm module."],["TrapCode","A trap code describing the reason for a trap."],["Val","Possible runtime values that a WebAssembly module can either consume or produce."],["ValType","A list of all possible value types in WebAssembly."],["WasmBacktraceDetails","Select how wasm backtrace detailed information is handled."]],"mod":[["unix","Unix-specific extension for the `wasmtime` crate."]],"struct":[["Caller","A structure representing the caller’s context when creating a function via [`Func::wrap`]."],["Config","Global configuration options used to create an `Engine` and customize its behavior."],["Engine","An `Engine` which is a global context for compilation and management of wasm modules."],["Export","An exported WebAssembly value."],["ExportType","A descriptor for an exported WebAssembly value."],["ExternRef","Represents an opaque reference to any data within WebAssembly."],["FrameInfo","Description of a frame in a backtrace for a `Trap`."],["FrameSymbol","Debug information for a symbol that is attached to a [`FrameInfo`]."],["Func","A WebAssembly function which can be called."],["FuncType","A descriptor for a function in a WebAssembly module."],["Global","A WebAssembly `global` value which can be read and written to."],["GlobalType","A WebAssembly global descriptor."],["ImportType","A descriptor for an imported value into a wasm module."],["Instance","An instantiated WebAssembly module."],["InstancePre","An instance, pre-instantiation, that is ready to be instantiated."],["InstanceType","A descriptor for a WebAssembly instance type."],["InterruptHandle","A threadsafe handle used to interrupt instances executing within a particular `Store`."],["Linker","Structure used to link wasm modules/instances together."],["Memory","A WebAssembly linear memory."],["MemoryAccessError","Error for out of bounds [`Memory`] access."],["MemoryType","A descriptor for a WebAssembly memory type."],["Module","A compiled WebAssembly module, ready to be instantiated."],["ModuleType","A descriptor for a WebAssembly module type."],["Store","A [`Store`] is a collection of WebAssembly instances and host-defined state."],["StoreContext","A temporary handle to a [`&Store<T>`][`Store`]."],["StoreContextMut","A temporary handle to a [`&mut Store<T>`][`Store`]."],["StoreLimits","Provides limits for a `Store`."],["StoreLimitsBuilder","Used to build [`StoreLimits`]."],["Table","A WebAssembly `table`, or an array of values."],["TableType","A descriptor for a table in a WebAssembly module."],["Trap","A struct representing an aborted instruction execution, with a message indicating the cause."],["TypedFunc","A statically typed WebAssembly function."]],"trait":[["AsContext","A trait used to get shared access to a [`Store`] in Wasmtime."],["AsContextMut","A trait used to get exclusive mutable access to a [`Store`] in Wasmtime."],["IntoFunc","Internal trait implemented for all arguments that can be passed to [`Func::wrap`] and `Linker::func_wrap`."],["LinearMemory","A linear memory. This trait provides an interface for raw memory buffers which are used by wasmtime, e.g. inside [‘Memory’]. Such buffers are in principle not thread safe. By implementing this trait together with MemoryCreator, one can supply wasmtime with custom allocated host managed memory."],["MemoryCreator","A memory creator. Can be used to provide a memory creator to wasmtime which supplies host managed memory."],["ResourceLimiter","Used by hosts to limit resource consumption of instances."],["WasmParams","A trait used for [`Func::typed`] and with [`TypedFunc`] to represent the set of parameters for wasm functions."],["WasmResults","A trait used for [`Func::typed`] and with [`TypedFunc`] to represent the set of results for wasm functions."],["WasmRet","A trait implemented for types which can be returned from closures passed to [`Func::wrap`] and friends."],["WasmTy","A trait implemented for types which can be arguments and results for closures passed to [`Func::wrap`] as well as parameters to [`Func::typed`]."]],"union":[["ValRaw","A “raw” and unsafe representation of a WebAssembly value."]]});