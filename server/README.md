#### Convert Stream to HLS
.\server\libs\ffmpeg.exe -i <RTSP URL STREAM> -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8

  #### Remove excess .ts files
  
  .\node_modules\.bin\nodemon .\cleaner.js
  
  #### Serve the hls (m3u8) file
  
  .\node_modules\.bin\nodemon .\hls-server.js
