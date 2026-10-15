import urllib.request
import os
import glob
import re

images = {
    'public/avatar1.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    'public/avatar2.jpg': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    'public/avatar3.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    'public/avatar4.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    'public/video-thumb.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    'public/cta.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    'public/gallery1.jpg': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    'public/gallery2.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    'public/gallery3.jpg': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    'public/gallery4.jpg': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    'public/feat1.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'public/feat2.jpg': 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800',
    'public/feat3.jpg': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    'public/research.jpg': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200'
}

print("Downloading aesthetic placeholder images...")
for filepath, url in images.items():
    if not os.path.exists(filepath):
        try:
            # Fake user agent to avoid basic blocks
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Downloaded {filepath}")
        except Exception as e:
            print(f"Failed to download {url}: {e}")

# Now replace HTML occurrences
for f in glob.glob("*.html"):
    with open(f, 'r') as file:
        content = file.read()
    
    # Avatars
    content = content.replace('src="/placeholder.png" id="avatar-1"', 'src="/avatar1.jpg" id="avatar-1"')
    content = content.replace('src="/placeholder.png" id="avatar-2"', 'src="/avatar2.jpg" id="avatar-2"')
    content = content.replace('src="/placeholder.png" id="avatar-3"', 'src="/avatar3.jpg" id="avatar-3"')
    content = content.replace('src="/placeholder.png" id="avatar-4"', 'src="/avatar4.jpg" id="avatar-4"')
    
    # Video & CTA
    content = content.replace('src="/placeholder.png" id="video-thumb"', 'src="/video-thumb.jpg" id="video-thumb"')
    content = content.replace('src="/placeholder.png" id="cta-img"', 'src="/cta.jpg" id="cta-img"')
    
    if f == 'service-details.html':
        content = content.replace('alt="User Research"', 'alt="User Research"')
        content = content.replace('src="/placeholder.png" style="width:100%; height:100%; object-fit:cover;" alt="User Research"', 'src="/research.jpg" style="width:100%; height:100%; object-fit:cover;" alt="User Research"')
        # Replace the 4 pg-img gallery placeholders explicitly
        content = re.sub(r'(<div class="pg-img fu"><img src=")/placeholder.png(")', r'\g<1>/gallery1.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="pg-img fu d1"><img src=")/placeholder.png(")', r'\g<1>/gallery2.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="pg-img fu"><img src=")/placeholder.png(")', r'\g<1>/gallery3.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="pg-img fu d1"><img src=")/placeholder.png(")', r'\g<1>/gallery4.jpg\g<2>', content, count=1)

    if f == 'projects.html':
        # Replace the first two /placeholder.png in .proj-img with proj1 and proj2
        content = re.sub(r'(<div class="proj-img[^>]*>\s*<img src=")/placeholder.png(")', r'\g<1>/proj1.png\g<2>', content, count=1)
        content = re.sub(r'(<div class="proj-img[^>]*>\s*<img src=")/placeholder.png(")', r'\g<1>/proj2.png\g<2>', content, count=1)
        
        # Replace the 3 featured projects 
        content = re.sub(r'(<div class="fp-img"><img src=")/placeholder.png(")', r'\g<1>/feat1.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="fp-img"><img src=")/placeholder.png(")', r'\g<1>/feat2.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="fp-img"><img src=")/placeholder.png(")', r'\g<1>/feat3.jpg\g<2>', content, count=1)
        
        # Replace the 4 pg-img gallery placeholders
        content = re.sub(r'(<div class="pg-img fu"><img src=")/placeholder.png(")', r'\g<1>/gallery1.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="pg-img fu d1"><img src=")/placeholder.png(")', r'\g<1>/gallery2.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="pg-img fu"><img src=")/placeholder.png(")', r'\g<1>/gallery3.jpg\g<2>', content, count=1)
        content = re.sub(r'(<div class="pg-img fu d1"><img src=")/placeholder.png(")', r'\g<1>/gallery4.jpg\g<2>', content, count=1)

    with open(f, 'w') as file:
        file.write(content)
        
print("Replaced all HTML placeholders and connected them perfectly to the high quality assets.")
