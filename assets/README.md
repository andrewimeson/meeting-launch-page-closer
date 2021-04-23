# Zoom Closer - Assets

This directory contains the images used in the extension, the Chrome Web Store
listing, and the GitHub social preview. They were made with Gimp 2.10 on macOS

Note that not all of these assets should be in the zip bundle that is submitted
to the Chrome Web Store. Only the ones listed in the
[manifest.json](../manifest.json) should be included

For guidelines, see the 
["Supplying Images" document](https://developer.chrome.com/docs/webstore/images/)
on the Chrome Developers site.

### General tips for making the screenshots 

1. Launch a fresh instance of Chrome so that the screenshots don't have all
   your customizations and extensions in them
   ```shell-session
   $ /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
       --user-data-dir="$HOME/Downloads/tmpchrome/"
   ```
2. Disable drop shadows
   ```shell-session
   $ defaults write com.apple.screencapture disable-shadow -bool TRUE
   $ killall SystemUIServer
   
   $ # When you're ready to re-enable
   $ defaults write com.apple.screencapture disable-shadow -bool FALSE
   $ killall SystemUIServer
   ```
3. Scale down with `NoHalo` interpolation in Gimp
4. …but do use drop shadows for the "Open zoom.us.app?" dialog. For that, I
   spliced it in as a layer in the
   [zoom_screenshot_1.xcf Gimp file](zoom_screenshot_1.xcf)
5. Optimize the files with `pngquant --strip`
