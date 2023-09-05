window.BENCHMARK_DATA = {
  "lastUpdate": 1693936068801,
  "repoUrl": "https://github.com/mgoin/benchmark-sparsezoo",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "mgoin",
            "username": "mgoin"
          },
          "committer": {
            "name": "mgoin",
            "username": "mgoin"
          },
          "id": "9e4a0f6800e08b3c1bc777daeb49080dd43eb48b",
          "message": "Add GHA for benchmarking",
          "timestamp": "2023-09-05T16:10:59Z",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/pull/1/commits/9e4a0f6800e08b3c1bc777daeb49080dd43eb48b"
        },
        "date": 1693936068458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 212.65024002395714,
            "unit": "items/sec",
            "range": "1935.8396903181826",
            "extra": "mean: 4.6969344391848145ms\nmedian: 4.5995374999989735ms\nstd: 0.5165717001264892ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 45.18460044353523,
            "unit": "items/sec",
            "range": "731.2097041599242",
            "extra": "mean: 22.119462174041463ms\nmedian: 21.846422999999504ms\nstd: 1.367596729516719ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 256.6124960051851,
            "unit": "items/sec",
            "range": "3244.4385951537397",
            "extra": "mean: 3.8911427089235944ms\nmedian: 3.8355319999823223ms\nstd: 0.30821973376032236ms"
          }
        ]
      }
    ]
  }
}