initSidebarItems({"constant":[["VERSION","This runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""],["WEIGHT_PER_SECOND",""]],"enum":[["Call",""],["DispatchClass","A generalized group of dispatch types."],["Event",""],["OriginCaller",""]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"macro":[["construct_runtime","Construct a runtime, with the given name and the given pallets."],["match_type","Create a type which implements the `Contains` trait for a particular type with syntax similar to `matches!`."],["parameter_types","Create new implementations of the `Get` trait."]],"mod":[["api",""]],"struct":[["BlockExecutionWeight","Importing a block with 0 txs takes ~5 ms"],["BlockHashCount",""],["ExtrinsicBaseWeight","Executing 10,000 System remarks (no-op) txs takes ~1.26 seconds -> ~125 µs per tx"],["GenesisConfig",""],["IdentityFee","Implementor of `WeightToFeePolynomial` that maps one unit of weight to one unit of fee."],["IsInVec","Trivial utility for implementing `Contains`/`OrderedMembership` with a `Vec`."],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Perbill","A fixed point representation of a number in the range [0, 1]."],["Permill","A fixed point representation of a number in the range [0, 1]."],["RocksDbWeight","By default, Substrate uses RocksDB, so this will be the weight used throughout the runtime."],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["SS58Prefix",""],["Version",""]],"trait":[["BuildStorage","Complex storage builder stuff."],["Randomness","A trait that is able to provide randomness."],["StorageValue","A trait for working with macro-generated storage values under the substrate storage API."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","An index to a block."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["Executive","Executive: handles dispatch to the various modules."],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Index","Index of a transaction in the chain."],["ParachainInfo",""],["ParachainInfoConfig",""],["ParachainSystem",""],["ParachainSystemConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["SoloToPara",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Weight","Numeric range of a transaction weight."]]});