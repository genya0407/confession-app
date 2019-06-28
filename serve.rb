#! /bin/sh
exec ruby -S -x "$0" "$@"
#! ruby

require 'webrick'

root = File.expand_path './public'
server = WEBrick::HTTPServer.new :Port => 8000, :DocumentRoot => root
server.start