import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder

# Load the dataset
data = pd.read_csv("dataset/triageDataset.csv")

# Convert the time column to a numerical format
data["Arrival Time"] = pd.to_datetime(data["Arrival Time"], format='%I:%M %p').dt.hour

# Convert the "Level of Urgency" column to a numerical column
urgency_mapping = {"Critical": 3, "High": 2, "Moderate": 1, "Low": 0}
data["Level of Urgency"] = data["Level of Urgency"].map(urgency_mapping)

# One-hot encode the "Case ID" column
one_hot_encoder = OneHotEncoder()
case_id_one_hot = one_hot_encoder.fit_transform(data[["ID"]]).toarray()

# Add the one-hot encoded values to the data
case_id_columns = ["ID_" + str(int(i)) for i in range(case_id_one_hot.shape[1])]
case_id_df = pd.DataFrame(case_id_one_hot, columns=case_id_columns)
data = pd.concat([data, case_id_df], axis=1)

# Drop the original "Case ID" column
data.drop("ID", axis=1, inplace=True)

# Split the data into training and testing sets
train_data, test_data, train_labels, test_labels = train_test_split(data.drop("Level of Urgency", axis=1), data["Level of Urgency"], test_size=0.2, random_state=0)

# Train a logistic regression model
model = LogisticRegression()
model.fit(train_data, train_labels)

# Evaluate the model accuracy
accuracy = model.score(test_data, test_labels)
print("Model accuracy:", accuracy)