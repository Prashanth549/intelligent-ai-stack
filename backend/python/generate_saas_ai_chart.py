import matplotlib.pyplot as plt
import numpy as np
import os

# Get project root
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))

# Target path → frontend public folder
output_path = os.path.join(BASE_DIR, "frontend", "public", "images", "saas-vs-ai-chart.png")

# Ensure directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# Data
x = np.linspace(0, 10, 100)
traditional = x * 0.8
ai = 0.5 * x**1.5

# Plot
plt.figure()
plt.plot(x, traditional, label="Traditional SaaS")
plt.plot(x, ai, label="AI-Enabled SaaS")

plt.xlabel("Time")
plt.ylabel("Efficiency / Output")
plt.title("Traditional SaaS vs AI-Enabled SaaS")

plt.legend()

# Save
plt.savefig(output_path, dpi=300, bbox_inches='tight')
plt.close()

print(f"Chart saved to: {output_path}")