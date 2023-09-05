import csv
import json

from deepsparse.benchmark.benchmark_sweep import benchmark_sweep

# Set up the 
models = [
    "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate",
    "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none",
    "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none",
]
batch_sizes = [1]
export_csv_path = "benchmark_sweep.csv"

# Run the benchmarks
benchmark_sweep(models, batch_sizes=batch_sizes, export_csv_path=export_csv_path)

# Read the benchmarks CSV output and convert it to the JSON format for github-action-benchmark
data = []
with open(export_csv_path, newline="") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        model_name = row["Model"]
        batch_size = row["Batch Size"]
        items_per_second = row["Items per second"]
        latency_mean = row["Mean Latency"]
        latency_median = row["Median Latency"]
        latency_std = row["Std Latency"]
        data.append(
            {
                "name": f"{model_name}, batch_size:{batch_size}",
                "value": float(items_per_second),
                "unit": "items/sec",
                "range": f"{latency_std}",
                "extra": f"mean: {latency_mean} ms\nmedian: {latency_median} ms\nstd: {latency_std} ms"
            }
        )

# Write out the final JSON for github-action-benchmark
with open("output.json", "w") as output:
    json.dump(data, output)
