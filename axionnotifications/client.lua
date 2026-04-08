RegisterNetEvent('axionnotifications:send')
AddEventHandler('axionnotifications:send', function(message, type, duration)
    SendNUIMessage({
        action = "notify",
        message = message or "No message",
        type = type or "info",
        duration = duration or 5000
    })
end)

-- Export for client-side use
exports('Notify', function(message, type, duration)
    TriggerEvent('axionnotifications:send', message, type, duration)
end)