if (!(Test-Path .\.materials)) {
    mkdir .\.materials
}

Compress-Archive -DestinationPath .\.materials\Course.zip -Update -Path ".\"
