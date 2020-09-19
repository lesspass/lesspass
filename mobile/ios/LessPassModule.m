#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_REMAP_MODULE(LessPass, LessPassModule, NSObject)

  RCT_EXTERN_METHOD(createFingerprint:(NSString *) masterPassword
                    resolver:(RCTPromiseResolveBlock)resolve
                    rejecter:(RCTPromiseRejectBlock)reject)

  RCT_EXTERN_METHOD(calcEntropy:(NSString *) site
                    withLogin: (NSString *) login
                    withMasterPassword: (NSString *) masterPassword
                    withCounter: (NSString *) counter
                    resolver:(RCTPromiseResolveBlock)resolve
                    rejecter:(RCTPromiseRejectBlock)reject)

@end
