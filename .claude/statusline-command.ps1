$input_data = $input | Out-String
try {
    $json = $input_data | ConvertFrom-Json
} catch {
    exit 0
}

$parts = @()

$model = $json.model.display_name
if ($model) { $parts += $model }

$used = $json.context_window.used_percentage
$remaining = $json.context_window.remaining_percentage
if ($null -ne $remaining) {
    $u = [math]::Round($used)
    $r = [math]::Round($remaining)
    $parts += "Context: ${u}% used / ${r}% left"
}

$five = $json.rate_limits.five_hour.used_percentage
$week = $json.rate_limits.seven_day.used_percentage
if ($null -ne $five -or $null -ne $week) {
    $limits = @()
    if ($null -ne $five) { $limits += "5h:$([math]::Round($five))%" }
    if ($null -ne $week) { $limits += "7d:$([math]::Round($week))%" }
    $parts += "Limits: $($limits -join ' ')"
}

$parts -join ' | '
