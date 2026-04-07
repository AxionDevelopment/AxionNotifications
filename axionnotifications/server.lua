RegisterNetEvent('axionnotifications:server')
AddEventHandler('axionnotifications:server', function(target, message, type, duration)
    if target == -1 then
        TriggerClientEvent('axionnotifications:send', -1, message, type, duration)
    else
        TriggerClientEvent('axionnotifications:send', target, message, type, duration)
    end
end)

-- Export for server-side use
exports('AxionNotify', function(target, message, type, duration)
    TriggerClientEvent('axionnotifications:send', target, message, type, duration)
end)