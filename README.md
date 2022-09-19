# SNBT Website

A quick and dirty website for SNBT to show off the standard layout and features of the SNBT configuration library / file spec. Built using Vite, React and Tailwind. Deployed via Cloudflare Pages <3

## What is SNBT

SNBT is a configuration file specification created by [@LatvianModder](https://github.com/LatvianModder) with the full implementation found [here](https://github.com/latvian-dev/SNBT) or for the FTB variation you can find the source code [here](https://github.com/FTBTeam/FTB-Library/tree/1.18/main/common/src/main/java/dev/ftb/mods/ftblibrary/snbt). The specification sits on top of the normal Minecraft NBT system allowing it to be compressed down to NBT and sent as bytes over the network.

## Example
```json5
{
    # Boolean test 3
    # Default: false
    "test 3": false,
    
    # Default: true
    test_1: true
    
    # Boolean test 2
    # Default: true
    test_2: true
    
    # Group comment test# Line 2
    sub_test: {
        # Default: false
        boolean: false
        
        # Default: 0.5d# Range: 0.0d ~ 1.0d
        double: 1.0d
        
        # Default: 50# Range: 30 ~ +∞
        int: 30
        
        # Default: "hello"
        string: "hello"
  }
}
```
