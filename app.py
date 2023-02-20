import pandas as pd
import numpy as np

# Load the dataset
data = pd.read_csv("dataset/triageDataset.csv")

# Convert the time column to a numerical format
data["Arrival Time"] = pd.to_datetime(data["Arrival Time"], format='%I:%M %p').dt.hour

# Convert the "Level of Urgency" column to a numerical column
urgency_mapping = {"Critical": 3, "High": 2, "Moderate": 1, "Low": 0}
data["Level of Urgency"] = data["Level of Urgency"].map(urgency_mapping)

# Create a function to calculate the priority score for each case
def calculate_priority_score(row):
    urgency_weight = row["Level of Urgency"]
    time_weight = 1 / (row["Arrival Time"] + 1)
    return urgency_weight * time_weight

# Add a column to store the priority score for each case
data["Priority Score"] = data.apply(calculate_priority_score, axis=1)

# Sort the cases based on the priority score in descending order
data = data.sort_values("Priority Score", ascending=False)
# Add a column to store the position of each case
data["Position"] = np.arange(1, len(data) + 1)
# Save the updated data to a new CSV file
data.to_csv("dataset/updated_dataset.csv", index=False)

# Print the updated data
print(data)