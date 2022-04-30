ac=5;
fc=2;
b=input("enter the number of bits");
bs=randi([0,1],1,b);
t=0.01:0.01:b;
for i=1:b
    mt((i-1)*100+1:i*100)=bs(i);
end

ct=ac*cos(2*pi*fc.*t);
st=ac*cos(2*pi*fc*(mt+1).*t);
subplot(3,1,1);
plot(t,mt);
subplot(3,1,2);
plot(t,ct);
subplot(3,1,3);
plot(t,st);
