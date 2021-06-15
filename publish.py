import os
import time

print("[INFO] Linking css together")

linkinfo = open("./source/linkinfo", "r")
files = []
for eachline in linkinfo:
    files.append(eachline.replace("\n", ""))
linkinfo.close()
outputfile = open("./"+files[0], "w")
outputfile.truncate()
for each in range(1, len(files)):
    eachfile = open("./source/"+files[each], "r")
    outputfile.write(eachfile.read())
    eachfile.close()
outputfile.flush()
outputfile.close()


os.system("git add .")
print("[INFO] Commit info: Update" +
      time.strftime("%Y%m%d-%H%M%S", time.localtime()))
os.system("git commit -m '"+time.strftime("%Y%m%d-%H%M%S", time.localtime())+"'")
print("[INFO] Uploading files")
os.system("git push")
print("[INFO] Push success")
