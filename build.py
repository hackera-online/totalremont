import re,base64
d="/home/claude/site/";h=open(d+"index.html").read()
h=h.replace('<link rel="stylesheet" href="css/style.css">',"<style>"+open(d+"css/style.css").read()+"</style>")
h=h.replace('<script src="js/main.js"></script>',"<script>"+open(d+"js/main.js").read()+"</script>")
h=re.sub(r'src="assets/img/(\w+)\.jpg"',lambda m:'src="data:image/jpeg;base64,'+base64.b64encode(open(d+"assets/img/"+m.group(1)+".jpg","rb").read()).decode()+'"',h)
h=h.replace('href="assets/favicon.svg"','href="data:image/svg+xml;base64,'+base64.b64encode(open(d+"assets/favicon.svg","rb").read()).decode()+'"')
open("/mnt/user-data/outputs/chist-obekt-preview.html","w").write(h)
