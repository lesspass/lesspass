#import "LessPassClipboardModule.h"

@implementation LessPassClipboardModule

RCT_EXPORT_MODULE(LessPassClipboard);


RCT_EXPORT_METHOD(copy:(NSString *)content)
{
  UIPasteboard *clipboard = [UIPasteboard generalPasteboard];
  clipboard.string = (content ? : @"");
}

@end
