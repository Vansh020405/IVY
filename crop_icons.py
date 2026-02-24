import sys
from PIL import Image
import os

img_path = r'c:\Users\VANSH\Desktop\CHALKPAD PRO\public\icons_source.png'
out_dir = r'c:\Users\VANSH\Desktop\CHALKPAD PRO\public'

try:
    img = Image.open(img_path)
    # The image is presumably a screenshot of a 2x2 grid. Let's find the centers
    # and crop 200x200 squares around them to get the high-res icons.
    # Image size is roughly mobile viewport, say 430x932. 
    # Let's crop into 4 quadrants essentially, or explicitly crop out the icons.
    w, h = img.size
    print(f"Image size: {w}x{h}")

    # Let's calculate the bounding boxes roughly based on the image provided:
    # 2 rows, 2 columns.
    # Top left: Session
    # Top right: Change Password
    # Bottom left: Logout
    # Bottom right: Privacy
    
    # We will just split it exactly in 4 quadrants for now to make sure we don't miss anything 
    # and then adjust if needed, or better, we can just use the provided image as a whole in the app 
    # but the spacing in the app is different. So individual crops are best.
    
    # A generic tight crop routine:
    # We can use bounding boxes around the non-white regions.
    import numpy as np
    
    # Convert to grayscale to find non-white areas
    gray = img.convert('L')
    gray_data = np.array(gray)
    
    # Threshold for "non-white"
    non_white = gray_data < 250
    # Find all columns and rows that have non-white pixels
    coords = np.argwhere(non_white)
    y_min, x_min = coords.min(axis=0)
    y_max, x_max = coords.max(axis=0)
    
    # Crop to the grid area
    grid_img = img.crop((x_min, y_min, x_max, y_max))
    gw, gh = grid_img.size
    
    # Split the grid into 4 equal quarters
    half_x = gw // 2
    half_y = gh // 2
    
    # Top Left (Session)
    img_tl = grid_img.crop((0, 0, half_x, half_y))
    # Top Right (Password)
    img_tr = grid_img.crop((half_x, 0, gw, half_y))
    # Bottom Left (Logout)
    img_bl = grid_img.crop((0, half_y, half_x, gh))
    # Bottom Right (Privacy)
    img_br = grid_img.crop((half_x, half_y, gw, gh))
    
    # Function to crop to actual content center for each quarter
    def crop_center_icon(patch, name):
        p_gray = np.array(patch.convert('L'))
        pnw = p_gray < 250
        p_coords = np.argwhere(pnw)
        if len(p_coords) > 0:
            py_min, px_min = p_coords.min(axis=0)
            py_max, px_max = p_coords.max(axis=0)
            # Add a bit of padding (e.g., 5 pixels)
            pad = 2
            px_min = max(0, px_min - pad)
            py_min = max(0, py_min - pad)
            px_max = min(patch.size[0], px_max + pad)
            py_max = min(patch.size[1], py_max + pad)
            # Force square aspect ratio
            w = px_max - px_min
            h = py_max - py_min
            size = max(w, h)
            
            # Adjust to center the square
            cx = (px_min + px_max) // 2
            cy = (py_min + py_max) // 2
            
            sq_x_min = cx - size // 2
            sq_x_max = sq_x_min + size
            sq_y_min = cy - size // 2
            sq_y_max = sq_y_min + size
            
            final_patch = patch.crop((sq_x_min, sq_y_min, sq_x_max, sq_y_max))
            
            # Resize them to a standard size, e.g., 200x200
            final_patch = final_patch.resize((200, 200), Image.Resampling.LANCZOS)
            final_patch.save(os.path.join(out_dir, name))
            print(f"Saved {name} at {sq_x_min},{sq_y_min} -> size {size}x{size}")

    crop_center_icon(img_tl, 'icon_session.png')
    crop_center_icon(img_tr, 'icon_password.png')
    crop_center_icon(img_bl, 'icon_logout.png')
    crop_center_icon(img_br, 'icon_privacy.png')

except Exception as e:
    print("Error:", e)
