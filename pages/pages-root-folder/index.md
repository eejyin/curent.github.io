---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
widget1:
  title: "Getting started"
  url: 'https://ltb.readthedocs.io/en/latest/'
  text: 'Find out the User Guide, Examples, and Demonstrations.'
# TODO
widget2:
  title: "YouTube"
  url: 'https://www.youtube.com/channel/UCGJLH2w4Nb2EyN_9wRgRBug'
  text: 'Find seminars, presentations, and tutorials of LTB.'
  video: '<a href="#" data-reveal-id="videoModal"><img src="http://phlow.github.io/feeling-responsive/images/start-video-feeling-responsive-302x182.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "Code Repository"
  url: 'https://github.com/CURENT/ltb'
  text: 'LTB is free and licensed under a GP:-3.0 License.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: https://tinyletter.com/feeling-responsive
  text: Documentation
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---
