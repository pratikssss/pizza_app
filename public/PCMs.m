fm = 20;
fs = fm*5;
Am = 5;
% Make time for non sampled signal
t = 0:(1/(20*fs)):1;
mt = Am.*sin((2*pi*fm).*t)
subplot(4,1,1);
plot(t,mt)

% sampling the message signal
t = 0:(1/fs):1;
dt = Am.*sin((2*pi*fm).*t) + Am;
% Quantization levels
level = 8;
subplot(4,1,2);
plot(t, dt)
dt = dt + (Am/(2*level));
dt = dt - mod(dt,(Am/level));

subplot(4,1,3);
stem(t, dt);
% Encode the signal
dt = dt/1.25;

st = dt.*1.25 + Am;
subplot(4,1,4);
plot(st)