window.BENCHMARK_DATA = {
  "lastUpdate": 1693941149855,
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
      },
      {
        "commit": {
          "author": {
            "email": "michael@neuralmagic.com",
            "name": "Michael Goin",
            "username": "mgoin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31be5665c7f91485ffd60d8d5caf0e93920d1090",
          "message": "Merge pull request #1 from mgoin/benchmark-gha\n\nAdd GHA for benchmarking",
          "timestamp": "2023-09-05T13:50:57-04:00",
          "tree_id": "6ba95aa1e728603a2cf5f54146f32337bf551e3a",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/commit/31be5665c7f91485ffd60d8d5caf0e93920d1090"
        },
        "date": 1693936414724,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 187.33329638496295,
            "unit": "items/sec",
            "range": "1506.6782040710293",
            "extra": "mean: 5.333039806405571ms\nmedian: 5.2249899999878835ms\nstd: 0.6637117317407327ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 39.40696718638209,
            "unit": "items/sec",
            "range": "713.2488495865148",
            "extra": "mean: 25.36601903803824ms\nmedian: 25.12035099999821ms\nstd: 1.402035209141551ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 249.81630867665848,
            "unit": "items/sec",
            "range": "1338.177804474332",
            "extra": "mean: 3.997495510740777ms\nmedian: 3.8794929999994565ms\nstd: 0.7472848500822532ms"
          }
        ]
      },
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
          "id": "497ac37d17f7d51b54a3744f1388fce335be0a90",
          "message": "Update benchmark.yml",
          "timestamp": "2023-09-05T17:51:06Z",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/pull/2/commits/497ac37d17f7d51b54a3744f1388fce335be0a90"
        },
        "date": 1693936510471,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 164.6880752493785,
            "unit": "items/sec",
            "range": "1391.7349569473538",
            "extra": "mean: 6.057522809147933ms\nmedian: 5.9879849999902035ms\nstd: 0.7185276154832028ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 39.63317125873171,
            "unit": "items/sec",
            "range": "567.8784816185487",
            "extra": "mean: 25.216183815126048ms\nmedian: 25.008140499991782ms\nstd: 1.7609401172409855ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 204.806274853969,
            "unit": "items/sec",
            "range": "2363.7082279318633",
            "extra": "mean: 4.869905610903444ms\nmedian: 4.841366999983165ms\nstd: 0.4230640601843461ms"
          }
        ]
      },
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
          "id": "11b636a46ebeb81832597c68cfa30e0c85b2a1e1",
          "message": "Update benchmark.yml",
          "timestamp": "2023-09-05T17:51:06Z",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/pull/2/commits/11b636a46ebeb81832597c68cfa30e0c85b2a1e1"
        },
        "date": 1693936755242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 164.11594796750038,
            "unit": "items/sec",
            "range": "1065.962500814188",
            "extra": "mean: 6.083866542242009ms\nmedian: 5.949765499998705ms\nstd: 0.9381193046061138ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 36.15861851390058,
            "unit": "items/sec",
            "range": "688.898242729215",
            "extra": "mean: 27.641383909677746ms\nmedian: 27.250761000004786ms\nstd: 1.4515931932679784ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 203.39604320795405,
            "unit": "items/sec",
            "range": "1932.9203614007843",
            "extra": "mean: 4.908233545722813ms\nmedian: 4.838074500000289ms\nstd: 0.5173518888669069ms"
          }
        ]
      },
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
          "id": "820266a6c3f4fddfbdd254ff4eea13645871edb3",
          "message": "Update and cleanup",
          "timestamp": "2023-09-05T17:51:06Z",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/pull/3/commits/820266a6c3f4fddfbdd254ff4eea13645871edb3"
        },
        "date": 1693939012105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 80.04781899410412,
            "unit": "items/sec",
            "range": "611.6314858090603",
            "extra": "mean: 12.476254868443267ms\nmedian: 12.043476499997041ms\nstd: 1.6349714218476008ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 18.363895040715956,
            "unit": "items/sec",
            "range": "356.84019327523487",
            "extra": "mean: 54.43860248638822ms\nmedian: 53.50633800000537ms\nstd: 2.8023748973498868ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 150.26491040044675,
            "unit": "items/sec",
            "range": "934.7192252954695",
            "extra": "mean: 6.642629502884272ms\nmedian: 6.359889000009389ms\nstd: 1.0698399828931462ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@neuralmagic.com",
            "name": "Michael Goin",
            "username": "mgoin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "733deaa22c19c5f8ee5ff536c559506633a36bc0",
          "message": "Merge pull request #3 from mgoin/benchmark-gha\n\nUpdate and cleanup",
          "timestamp": "2023-09-05T15:07:30-04:00",
          "tree_id": "dec68b00d6177a35ce873f4e0f622035315a581e",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/commit/733deaa22c19c5f8ee5ff536c559506633a36bc0"
        },
        "date": 1693941030897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 82.97919843708704,
            "unit": "items/sec",
            "range": "585.105962788012",
            "extra": "mean: 12.039410613654681ms\nmedian: 11.595231000008255ms\nstd: 1.709092136465386ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 18.088645522656,
            "unit": "items/sec",
            "range": "279.82946627509386",
            "extra": "mean: 55.26619325414352ms\nmedian: 54.398278999997274ms\nstd: 3.573605072086737ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 156.32845662023047,
            "unit": "items/sec",
            "range": "985.9256859526377",
            "extra": "mean: 6.3891690601275215ms\nmedian: 6.124982000002888ms\nstd: 1.0142752280906073ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@neuralmagic.com",
            "name": "Michael Goin",
            "username": "mgoin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "733deaa22c19c5f8ee5ff536c559506633a36bc0",
          "message": "Merge pull request #3 from mgoin/benchmark-gha\n\nUpdate and cleanup",
          "timestamp": "2023-09-05T15:07:30-04:00",
          "tree_id": "dec68b00d6177a35ce873f4e0f622035315a581e",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/commit/733deaa22c19c5f8ee5ff536c559506633a36bc0"
        },
        "date": 1693941030897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 82.97919843708704,
            "unit": "items/sec",
            "range": "585.105962788012",
            "extra": "mean: 12.039410613654681ms\nmedian: 11.595231000008255ms\nstd: 1.709092136465386ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 18.088645522656,
            "unit": "items/sec",
            "range": "279.82946627509386",
            "extra": "mean: 55.26619325414352ms\nmedian: 54.398278999997274ms\nstd: 3.573605072086737ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 156.32845662023047,
            "unit": "items/sec",
            "range": "985.9256859526377",
            "extra": "mean: 6.3891690601275215ms\nmedian: 6.124982000002888ms\nstd: 1.0142752280906073ms"
          }
        ]
      }
    ],
    "DeepSparse benchmarks on SparseZoo": [
      {
        "commit": {
          "author": {
            "email": "michael@neuralmagic.com",
            "name": "Michael Goin",
            "username": "mgoin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243820d1f3328bc535458a484dddd22ced81f676",
          "message": "Update benchmark.yml",
          "timestamp": "2023-09-05T15:09:50-04:00",
          "tree_id": "c10259b11409b0447b00df25ee90b37ab508a7be",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/commit/243820d1f3328bc535458a484dddd22ced81f676"
        },
        "date": 1693941147796,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 194.5726275097905,
            "unit": "items/sec",
            "range": "1602.0178763585945",
            "extra": "mean: 5.130373072627637ms\nmedian: 5.038469500007636ms\nstd: 0.624212759893174ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 43.00698806814199,
            "unit": "items/sec",
            "range": "1130.8013731171654",
            "extra": "mean: 23.23802305189746ms\nmedian: 23.02745099999015ms\nstd: 0.8843286042741543ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 234.9865310185166,
            "unit": "items/sec",
            "range": "2285.801519290351",
            "extra": "mean: 4.2478059982977925ms\nmedian: 4.135017000010066ms\nstd: 0.43748330358554477ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@neuralmagic.com",
            "name": "Michael Goin",
            "username": "mgoin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243820d1f3328bc535458a484dddd22ced81f676",
          "message": "Update benchmark.yml",
          "timestamp": "2023-09-05T15:09:50-04:00",
          "tree_id": "c10259b11409b0447b00df25ee90b37ab508a7be",
          "url": "https://github.com/mgoin/benchmark-sparsezoo/commit/243820d1f3328bc535458a484dddd22ced81f676"
        },
        "date": 1693941147796,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "zoo:cv/classification/mobilenet_v1-1.0/pytorch/sparseml/imagenet/pruned_quant-moderate, batch_size:1",
            "value": 194.5726275097905,
            "unit": "items/sec",
            "range": "1602.0178763585945",
            "extra": "mean: 5.130373072627637ms\nmedian: 5.038469500007636ms\nstd: 0.624212759893174ms"
          },
          {
            "name": "zoo:cv/detection/yolov5-n/pytorch/ultralytics/coco/base_quant-none, batch_size:1",
            "value": 43.00698806814199,
            "unit": "items/sec",
            "range": "1130.8013731171654",
            "extra": "mean: 23.23802305189746ms\nmedian: 23.02745099999015ms\nstd: 0.8843286042741543ms"
          },
          {
            "name": "zoo:nlp/multilabel_text_classification/distilbert-none/pytorch/huggingface/goemotions/pruned90_quant-none, batch_size:1",
            "value": 234.9865310185166,
            "unit": "items/sec",
            "range": "2285.801519290351",
            "extra": "mean: 4.2478059982977925ms\nmedian: 4.135017000010066ms\nstd: 0.43748330358554477ms"
          }
        ]
      }
    ]
  }
}