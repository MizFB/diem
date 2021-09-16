initSidebarItems({"constant":[["AES_GCM_NONCE_LEN","The length in bytes of the AES-256-GCM nonce."],["AES_GCM_TAG_LEN","The length in bytes of the AES-256-GCM authentication tag."],["HKDF_SALT","We salt the HKDF for deriving the account keys to provide application separation."],["KEY_LEN","The length in bytes of the `shared_val_netaddr_key` and per-validator `derived_key`."],["TEST_SHARED_VAL_NETADDR_KEY","Constant key + version so we can push `EncNetworkAddress` everywhere without worrying about getting the key in the right places. these will be test-only soon."],["TEST_SHARED_VAL_NETADDR_KEY_VERSION",""]],"struct":[["EncNetworkAddress","An encrypted [`NetworkAddress`]."]],"type":[["Key","Convenient type alias for the `shared_val_netaddr_key` as an array."],["KeyVersion",""]]});