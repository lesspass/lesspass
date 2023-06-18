def create_profile(args):
    profile = {
        "lowercase": False if "nl" in dir(args) and args.nl else True,
        "uppercase": False if "nu" in dir(args) and args.nu else True,
        "digits": False if "nd" in dir(args) and args.nd else True,
        "symbols": False if "ns" in dir(args) and args.ns else True,
        "length": args.length if "length" in dir(args) and args.length else 8,
        "counter": args.counter if "counter" in dir(args) and args.counter else 0,
        "site": args.site if "site" in dir(args) and args.site  else "login",
        "login": args.login if "login" in dir(args) and args.login else "",
        "exclude": args.exclude if "exclude" in dir(args) and args.exclude  else "",
    }
    
    profile["lowercase"] = args.l if "l" in dir(args) and args.l  else True
    profile["uppercase"] = args.u  if "u" in dir(args) and args.u  else True
    profile["digits"] = args.d  if "d" in dir(args) and args.d  else True
    profile["symbols"] = args.s  if "s" in dir(args) and args.s  else True
    return profile

